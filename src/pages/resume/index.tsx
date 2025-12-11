import { useTranslation } from "react-i18next";

const Timeline = ({
  items,
  isAcademic = false,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  isAcademic?: boolean;
}) => (
  <div className="relative my-12">
    {/* Ligne verticale */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-light-grey" />
    <div className="flex flex-col gap-16">
      {items.map((item, i) => {
        const isLeft = i % 2 === 0;
        return (
          <div
            key={i}
            className={`relative flex flex-col lg:flex-row ${
              isLeft ? "lg:justify-start" : "lg:justify-end"
            }`}
          >
            <div
              className={`lg:w-1/2 px-4 ${
                isLeft ? "lg:pr-12 text-left" : "lg:pl-12 text-left"
              }`}
            >
              <div className="bg-dark-grey border border-primary-hover shadow-lg p-6 rounded-lg hover:scale-105 transition-all duration-300">
                {isAcademic ? (
                  <>
                    <h3 className="text-2xl font-bold !text-primary italic">
                      {item.title}
                    </h3>
                    <p className="!text-secondary italic">{item.degree}</p>
                    <p className="text-sm !text-gray-400 italic mb-2">
                      {item.start_date} - {item.end_date}
                    </p>
                    <p className="!text-light-grey">{item.description}</p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold !text-primary italic">
                      {item.title}
                    </h3>
                    <p className="!text-light-grey">{item.job}</p>
                    <p className="text-sm !text-gray-400 italic mb-2">
                      <span className="!text-secondary">{item.contract}</span> •{" "}
                      {item.start_date} - {item.end_date}
                    </p>
                    <p
                      className="!text-light-grey"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.description}
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Point central */}
            <div className="hidden lg:flex items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 bg-primary rounded-full border-4 border-dark-grey shadow-md" />
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const Resume = () => {
  const { t } = useTranslation();

  const links = [
    {
      title: t("resume.title"),
      description: t("resume.description"),
      sub_description: t("resume.sub_description"),
    },
  ];

  const professional = t("resume.professional", {
    returnObjects: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const academic = t("resume.academic", { returnObjects: true }) as any[];

  return (
    <section
      id="RESUME"
      className="relative flex flex-col items-center py-4 bg-dark-grey"
    >
      {links.map((link, index) => (
        <div key={index} className="section-container">
          <h2 className="title !text-white">{link.title}</h2>
          <p className="text-center text-3xl pb-6 !text-light-grey">
            {link.description}
          </p>
          <p className="text-center pb-12 !text-light-grey italic">
            {link.sub_description}
          </p>

          {/* Timeline expériences pro */}
          <Timeline items={professional} />

          {/* Titre diplômes */}
          <h2 className="title !text-white mt-20">{t("resume.diplomas")}</h2>

          {/* Timeline diplômes */}
          <Timeline items={academic} isAcademic />
        </div>
      ))}
    </section>
  );
};

export default Resume;
