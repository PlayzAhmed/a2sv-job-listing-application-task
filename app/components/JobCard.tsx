type Skill = {
  name: string;
  color: string;
};

type Image = {
  url: string;
  alt: string;
};

export type JobCardProps = {
  image: Image;
  jobTitle: string;
  organizationName: string;
  organizationAddress: string;
  jobDescription: string;
  jobNature: string;
  skills: Skill[];
};

const JobCard = ({
  image,
  jobTitle,
  organizationName,
  organizationAddress,
  jobDescription,
  jobNature,
  skills,
}: JobCardProps) => {
  return (
    <>
      <div className="border-2 rounded-4xl border-gray-200 p-8 flex gap-4">
        <div>
          <img src={image.url} alt={image.alt} className="max-w-16" />
        </div>
        <div className="flex flex-col gap-2.5">
          <h1 className="font-bold text-2xl">{jobTitle}</h1>
          <div className="flex flex-row gap-2 text-gray-500 text">
            <h2>{organizationName}</h2>
            <span>•</span>
            <h2>{organizationAddress}</h2>
          </div>
          <p>
            {jobDescription}
          </p>
          <div className="flex flex-row gap-2.5 items-center font-medium text-xs mt-3">
            <div className="bg-green-100 py-2 px-3 rounded-full">
              <span className="text-green-500">{jobNature}</span>
            </div>
            <div className="border h-1/1 border-gray-300"></div>
            {skills.map((skill, index) => (
              <span
                className={
                  "min-w-16 border rounded-full text-center p-2 " + skill.color
                }
                key={index}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
