import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/Home.tsx", [index("routes/home/index.tsx")]),
  layout("./routes/layouts/Main.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    route("projects", "./routes/projects/index.tsx"),
    route("projects/:id", "./routes/projects/details.tsx"),
    route("blogs", "./routes/blogs/index.tsx"),
  ]),
] satisfies RouteConfig;
