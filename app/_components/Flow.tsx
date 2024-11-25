import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border shadow-lg bg-gray-700 flex flex-col justify-between h-fit w-fit">
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 bg-gradient-to-r from-gray-800 to-blue-900 text-white rounded-t-xl">
    {children}
  </div>
);

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-bold">{children}</h3>
);

const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 text-gray-100 font-semibold">{children}</div>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400 dark:text-gray-600"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export default function Flow() {
  const steps = [
    { title: "Step 1", content: "Prompt for your form you need." },
    { title: "Step 2", content: "Edit/make changes for required fields, if needed." },
    { title: "Step 3", content: "Share the form link and collect data." },
  ];

  return (
    <div className="bg-gray-900 ">
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center w-full max-w-[300px] ">
            <Card>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{step.content}</p>
              </CardContent>
            </Card>
            {index < steps.length - 1 && (
              <div className="hidden md:flex items-center justify-center mx-4">
                <ArrowRightIcon />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
