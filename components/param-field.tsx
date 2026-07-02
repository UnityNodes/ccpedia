import type { ReactNode } from 'react';

export function ParamField({
  path,
  type,
  required,
  children,
}: {
  path: string;
  type?: string;
  required?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="my-3 rounded-md border border-fd-border bg-fd-card p-3">
      <div className="flex flex-wrap items-baseline gap-2 font-mono text-sm">
        <span className="font-semibold text-fd-foreground">{path}</span>
        {type && (
          <span className="rounded bg-fd-muted px-1.5 py-0.5 text-xs text-fd-muted-foreground">
            {type}
          </span>
        )}
        {required && (
          <span className="rounded bg-red-500/10 px-1.5 py-0.5 text-xs text-red-500">
            required
          </span>
        )}
      </div>
      {children ? (
        <div className="mt-2 text-sm text-fd-muted-foreground">{children}</div>
      ) : null}
    </div>
  );
}

export function ResponseField(props: {
  name: string;
  type?: string;
  required?: boolean;
  children?: ReactNode;
}) {
  return (
    <ParamField
      path={props.name}
      type={props.type}
      required={props.required}
    >
      {props.children}
    </ParamField>
  );
}
