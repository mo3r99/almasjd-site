"use client";

import { useActionState } from "react";

export default function Form({ action, className, children }) {
  const [state, formAction, isPending] = useActionState(action, {});

  return (
    <form className={className} action={formAction}>
      {!state.message && !isPending ? (
        children
      ) : state.message && !isPending ? (
        <p className="text-center w-full font-[family-name:var(--font-montserrat)] text-green-400 pb-8">
          {state.message}
        </p>
      ) : (
        <p className="text-center w-full font-[family-name:var(--font-montserrat)] pb-8">
          Loading...
        </p>
      )}
      {state.error ? (
        <p className="text-center w-full font-[family-name:var(--font-montserrat)] text-red-400 pb-8">
          {state.error}
        </p>
      ) : null}
    </form>
  );
}
