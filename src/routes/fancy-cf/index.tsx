import { createFileRoute } from "@tanstack/react-router";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "#/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "#/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "#/components/ui/select";
import { Button } from "#/components/ui/button";

const templates = [
  { label: "Select a template", value: null },
  { label: "Hello World", value: "hello-world" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
];

export const Route = createFileRoute("/fancy-cf/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-sm w-full">
        <form className="flex flex-col gap-5">
          <FieldGroup>
            <FieldSet>
              <FieldLegend className="text-2xl! font-medium dark:text-neutral-50">
                <div className="w-20 mb-5">
                  <CFlogo />
                </div>
                Create a Wroker
              </FieldLegend>
              <FieldDescription className="text-sm font-normal dark:text-neutral-500">
                Deploy serverless code instantly across cloudflare global
                network.
              </FieldDescription>
            </FieldSet>
          </FieldGroup>
          <FieldGroup className="gap-5">
            <Field>
              <FieldLabel
                htmlFor="api-name-uv3"
                className="text-sm dark:text-neutral-300 font-normal"
              >
                Name
              </FieldLabel>
              <InputGroup className="">
                <InputGroupInput className="text-sm" placeholder="my-api" />
                <InputGroupAddon
                  align="inline-end"
                  className="bg-background px-2 rounded-r-md"
                >
                  .workers.dev
                </InputGroupAddon>
              </InputGroup>
            </Field>
            <Field>
              <FieldLabel className="text-sm font-normal dark:text-neutral-300">
                Starter template
              </FieldLabel>
              <Select items={templates}>
                <SelectTrigger>
                  <SelectValue className="text-sm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {templates.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                        className="text-sm"
                      >
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel
                htmlFor="api-name-uv3"
                className="text-sm dark:text-neutral-300 font-normal"
              >
                Compatibility date
              </FieldLabel>
              <InputGroup>
                <InputGroupInput
                  className="text-sm"
                  placeholder="E.g. 2024-01-01"
                />
              </InputGroup>
            </Field>
            <Field orientation="vertical">
              <Button type="submit" className="bg-orange-400 text-neutral-50">
                Deploy
              </Button>
            </Field>
          </FieldGroup>
          <div className="mx-auto text-xs font-normal dark:text-neutral-500">
            Or connect a{" "}
            <span className="text-orange-400">GitHub repository</span> for CI/CD
          </div>
        </form>
      </div>
    </div>
  );
}

export const CFlogo = () => {
  return (
    <svg viewBox="0 0 256 116" preserveAspectRatio="xMidYMid">
      <title>Cloudflare Logo</title>
      <path
        fill="#FFF"
        d="m202.357 49.394-5.311-2.124C172.085 103.434 72.786 69.289 66.81 85.997c-.996 11.286 54.227 2.146 93.706 4.059 12.039.583 18.076 9.671 12.964 24.484l10.069.031c11.615-36.209 48.683-17.73 50.232-29.68-2.545-7.857-42.601 0-31.425-35.497Z"
      />
      <path
        fill="#F4811F"
        d="M176.332 108.348c1.593-5.31 1.062-10.622-1.593-13.809-2.656-3.187-6.374-5.31-11.154-5.842L71.17 87.634c-.531 0-1.062-.53-1.593-.53-.531-.532-.531-1.063 0-1.594.531-1.062 1.062-1.594 2.124-1.594l92.946-1.062c11.154-.53 22.839-9.56 27.087-20.182l5.312-13.809c0-.532.531-1.063 0-1.594C191.203 20.182 166.772 0 138.091 0 111.535 0 88.697 16.995 80.73 40.896c-5.311-3.718-11.684-5.843-19.12-5.31-12.747 1.061-22.838 11.683-24.432 24.43-.531 3.187 0 6.374.532 9.56C16.996 70.107 0 87.103 0 108.348c0 2.124 0 3.718.531 5.842 0 1.063 1.062 1.594 1.594 1.594h170.489c1.062 0 2.125-.53 2.125-1.594l1.593-5.842Z"
      />
      <path
        fill="#FAAD3F"
        d="M205.544 48.863h-2.656c-.531 0-1.062.53-1.593 1.062l-3.718 12.747c-1.593 5.31-1.062 10.623 1.594 13.809 2.655 3.187 6.373 5.31 11.153 5.843l19.652 1.062c.53 0 1.062.53 1.593.53.53.532.53 1.063 0 1.594-.531 1.063-1.062 1.594-2.125 1.594l-20.182 1.062c-11.154.53-22.838 9.56-27.087 20.182l-1.063 4.78c-.531.532 0 1.594 1.063 1.594h70.108c1.062 0 1.593-.531 1.593-1.593 1.062-4.25 2.124-9.03 2.124-13.81 0-27.618-22.838-50.456-50.456-50.456"
      />
    </svg>
  );
};
