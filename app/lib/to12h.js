export default function to12h(time) {
  let [h, m] = time.split(":").map(Number);
  let suffix = "am";

  if (h >= 12) {
    h = h - 12;
    suffix = "pm";
  }

  if (h == 0) {
    h = 12;
  }

  return `${h}:${m < 10 ? "0" + m : m} ${suffix}`;
}
