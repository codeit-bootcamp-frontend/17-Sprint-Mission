import { snsImages } from "@/components/layout/snsData";

export default function SnsList() {
  return (
    <>
      <ol className="sns_wrapper">
        {snsImages.map((sns, index) => {
          const SnsIcon = sns.svg;
          return (
            <li key={index}>
              <a href={sns.href} target="_blank">
                <SnsIcon className="sns_icon" />
              </a>
            </li>
          );
        })}
      </ol>
    </>
  );
}
