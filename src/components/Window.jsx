import { RoughNotation } from "react-rough-notation";

export default function Window({ title, children, className = "" }) {
  return (
    <RoughNotation type="box" show={true} animate={false} color="black" strokeWidth={2}>
      <div className={"bg-white " + className}>
        <div className="h-6 flex items-center justify-center border-b border-dashed border-black/40">
          <span className="text-xs font-mono">{title}</span>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </RoughNotation>
  );
}