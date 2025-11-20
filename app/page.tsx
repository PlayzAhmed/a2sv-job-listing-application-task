import JobCard, { JobCardProps } from "./components/JobCard";

export default function Home() {
  const JobDetails: JobCardProps[] = [
    {
      image: {
        url: "https://scontent.faly8-2.fna.fbcdn.net/v/t39.30808-6/364729013_1414818636029325_1387373829888200417_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=vz35iP6DpaIQ7kNvwEcDkXn&_nc_oc=AdndY3V4msXOhrQCcF3u8h0kCFdctwzCOYugYbOHVsbsIOFc-CS0TZDW4p0suI-I10k&_nc_zt=23&_nc_ht=scontent.faly8-2.fna&_nc_gid=UQpfVipDaHosmEbzknIsAQ&oh=00_AfgYTFmMyScQljao2NZlDL_819liE5ls9yM_NZOfbRznuA&oe=692447FA",
        alt: "Young Men Christians Association",
      },
      jobTitle: "Social Media Assistant",
      organizationName: "Young Men Christians Association",
      organizationAddress: "Addis Ababa, Ethiopia",
      jobDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quas aspernatur ex nobis reiciendis excepturi molestias facere non amet, possimus cupiditate similique nam expedita inventore? Quaerat sit voluptatum incidunt odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique aspernatur harum quaerat ullam, rem deleniti nostrum, nesciunt tenetur neque nobis, enim libero aliquid expedita. Porro, voluptates? Suscipit, dolorem quisquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus assumenda eaque consequatur voluptates! Ab adipisci tempore sint recusandae officiis dolorum unde, ducimus magni dolores iure enim, fuga vel natus!",
      jobNature: "In Person",
      skills: [
        { name: "IT", color: "border-blue-800 text-blue-800" },
        { name: "Education", color: "border-yellow-400 text-yellow-400" },
      ],
    },
    {
      image: {
        url: "https://www.euromedwomen.foundation/icon/4587/large/1432051563/1432569485",
        alt: "Young Men Christians Association",
      },
      jobTitle: "Social Media Assistant",
      organizationName: "Young Men Christians Association",
      organizationAddress: "Addis Ababa, Ethiopia",
      jobDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quas aspernatur ex nobis reiciendis excepturi molestias facere non amet, possimus cupiditate similique nam expedita inventore? Quaerat sit voluptatum incidunt odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique aspernatur harum quaerat ullam, rem deleniti nostrum, nesciunt tenetur neque nobis, enim libero aliquid expedita. Porro, voluptates? Suscipit, dolorem quisquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus assumenda eaque consequatur voluptates! Ab adipisci tempore sint recusandae officiis dolorum unde, ducimus magni dolores iure enim, fuga vel natus!",
      jobNature: "In Person",
      skills: [
        { name: "IT", color: "border-blue-800 text-blue-800" },
        { name: "Education", color: "border-yellow-400 text-yellow-400" },
      ],
    },
    {
      image: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM6y_r65bVL_yP2t-lyDGvvGpVZVxmBFb_bg&s",
        alt: "The Africa in me",
      },
      jobTitle: "Social Media Assistant",
      organizationName: "The Africa in me",
      organizationAddress: "Addis Ababa, Ethiopia",
      jobDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, quas aspernatur ex nobis reiciendis excepturi molestias facere non amet, possimus cupiditate similique nam expedita inventore? Quaerat sit voluptatum incidunt odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam similique aspernatur harum quaerat ullam, rem deleniti nostrum, nesciunt tenetur neque nobis, enim libero aliquid expedita. Porro, voluptates? Suscipit, dolorem quisquam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo necessitatibus assumenda eaque consequatur voluptates! Ab adipisci tempore sint recusandae officiis dolorum unde, ducimus magni dolores iure enim, fuga vel natus!",
      jobNature: "In Person",
      skills: [
        { name: "IT", color: "border-blue-800 text-blue-800" },
        { name: "Education", color: "border-yellow-400 text-yellow-400" },
      ],
    },
  ];

  return (
    <>
      <main className="flex flex-col max-w-5xl m-auto">
        <div className="flex flex-row mt-16 justify-between items-center m-8">
          <div>
            <h1 className="text-blue-950 font-black text-3xl">Opportunities</h1>
            <p className="text-gray-500">Showing 3 results</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="text-gray-500">Sort by: </p>
            <p className="font-medium">Most relevant v</p>
          </div>
        </div>
        <div className="m-8 flex flex-col gap-12">
          {
            JobDetails.map((jobDetail, index) => (
              <JobCard 
              key={index}
              image={
                jobDetail.image
              }
              jobTitle={jobDetail.jobTitle}
              jobDescription={jobDetail.jobDescription}
              jobNature={jobDetail.jobNature}
              skills={jobDetail.skills}
              organizationAddress={jobDetail.organizationAddress}
              organizationName={jobDetail.organizationName}
              />
            ))
          }
        </div>
      </main>
    </>
  );
}
