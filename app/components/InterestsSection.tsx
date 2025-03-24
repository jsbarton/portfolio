import { LegacyRef } from "react";
import { contentWrapper, title } from "../styles";
import { interests } from "../messages";

type Props = {
  ref: LegacyRef<HTMLDivElement> | undefined;
};

const InterestsSection = ({ ref }: Props) => {
  return (
    <div className={contentWrapper} ref={ref}>
      <div className={title}>Interests</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {interests.map((interest, i) => (
          <div key={i} className="bg-yellow-200 p-4">
            {interest}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterestsSection;
