import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "My Friendly Dev" },
    { name: "description", content: "Custom Website Devlopment" },
  ];
}

export default function Home() {
  return <>My App</>;
}
