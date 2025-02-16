"use client";
import { useState } from "react";
import HOME from "@/store/home/HOME";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MoveUp } from "lucide-react";
import { MoveDown } from "lucide-react";
import { ArrowUpFromLine } from "lucide-react";
import { ArrowDownFromLine } from "lucide-react";

export default function HeroSection(props) {
  const [content, setContent] = useState(HOME);

  const [colourPickerOpen, setColourPickerOpen] = useState(false);

  function handleHeroChange(field, event) {
    setContent({
      ...content,
      main: {
        ...content.main,
        hero: {
          ...content.main.hero,
          [field]: event.target.value,
        },
      },
    });
    console.log(content);
  }

  function handleSlideChange(identifier, field, event) {
    setContent({
      ...content,
      main: {
        ...content.main,
        sections: content.main.sections.map((section) =>
          section.title === identifier
            ? { ...section, [field]: event.target.value }
            : section
        ),
      },
    });
  }

  function handleColourChange(colour) {
    const newContent = {
      ...content,
      sections: content.sections.map((section) =>
        section.title === "Featured Lessons"
          ? { ...section, background: colour }
          : section
      ),
    };
    setContent(newContent);
    setColourPickerOpen(false);
  }

function handleMoveUp(index) {
    const newContent = {...content};
    [newContent.sections[index], newContent.sections[index-1]] = 
        [newContent.sections[index-1], newContent.sections[index]];
    setContent(newContent);
}

function handleMoveDown(index) {
    const newContent = {...content};
    [newContent.sections[index+1], newContent.sections[index]] = 
        [newContent.sections[index], newContent.sections[index+1]];
    setContent(newContent);
}
  return (
    <>
      <section className="flex flex-col gap-4">
        <h1 className="text-xl mb-2">Main Landing</h1>

        <div className="flex flex-col min-w-10 w-[50vw] max-w-screen-sm gap-4 border-slate-300 rounded-lg border-[1px] p-3">
          <h3>Main slide</h3>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={content.main.hero.title}
              onChange={(e) => handleHeroChange("title", e)}
            />
          </div>
          <div>
            <Label htmlFor="subtitle">Caption</Label>
            <Textarea
              id="subtitle"
              value={content.main.hero.subtitle}
              onChange={(e) => handleHeroChange("subtitle", e)}
            />
          </div>
        </div>

        {content.main.sections.map((section, index) => {
          return (
            <div
              key={section.id}
              className="flex flex-col min-w-10 w-[50vw] max-w-screen-sm gap-4 border-slate-300 rounded-lg border-[1px] p-3"
            >
              <h3>Slide {index + 1}</h3>

              <div>
                <Label>Title</Label>
                <Input
                  value={section.title}
                  onChange={(e) => handleSlideChange(section.title, "title", e)}
                />
              </div>

              <div>
                <Label>Caption</Label>
                <Textarea
                  value={section.text}
                  onChange={(e) => handleSlideChange(section.title, "text", e)}
                />
              </div>
            </div>
          );
        })}
      </section>

      <section className="flex flex-col gap-4 mt-8 relative">
        <h1 className="text-xl mb-2">Sections</h1>
        {content.sections.map((section, index) => {
          return (
            <div
              className="flex justify-between relative bg-zinc-100 p-4 rounded-md"
              key={section.id}
            >
              <h3>{section.title}</h3>
              <div className="flex gap-4">
                <span className="relative">
                  {section.background &&
                    typeof section.background !== "boolean" && (
                      <div className="flex gap-2 relative">
                        <div
                          onClick={() => setColourPickerOpen(!colourPickerOpen)}
                          className={`${section.background} w-6 h-6 cursor-pointer`}
                        />
                        {colourPickerOpen && (
                          <ColourPicker
                            handleColourChange={handleColourChange}
                          />
                        )}
                      </div>
                    )}
                </span>

                {index !== 0 && <span className="w-7 h-7 flex justify-center align-middle bg-zinc-200 hover:bg-zinc-300 cursor-pointer rounded-md"><ArrowUpFromLine className={'w-4 h-4 mt-1'} onClick={() => handleMoveUp(index)}/></span>}
                {index !== (content.sections.length - 1) && <span className="w-7 h-7 flex justify-center align-middle bg-zinc-200 hover:bg-zinc-300 cursor-pointer rounded-md"><ArrowDownFromLine className={'w-4 h-4 mt-1'} onClick={() => handleMoveDown(index)} /></span>}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

function ColourPicker({ handleColourChange }) {
  const colours = ["bg-zinc-900", "bg-slate-700", "bg-cyan-900"];
  return (
    <div className="flex gap-4 ml-4 bg-zinc-200 p-2 rounded-md absolute top-[-3rem] right-[-3rem]">
      {colours.map((colour, index) => {
        return (
          <div
            onClick={(e) => handleColourChange(colour)}
            key={index}
            className={`w-6 h-6 ${colour} hover:border-[3px] hover:border-red-700`}
          />
        );
      })}
    </div>
  );
}
