import React from "react";
import SectionTitle from "../SectionTitle";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="
        p-4 lg:p-8 w-full
     "
    >
      <SectionTitle title="Let's Connect" />
      <div
        className="max-w-[600px]
            "
      >
        {" "}
        <p
          className="
            text-textLight/75
            mb-4
            "
        >
          I&apos;m always excited to connect with fellow professionals and
          explore new opportunities. Whether you have a project idea, a job
          opportunity, or just want to say hello, don&apos;t hesitate to reach
          out. I&apos;d love to hear from you!
          <br />
          <br />
          Feel free to click the buttons below to get in touch with me. You can
          either drop me an email or take a look at my resume to learn more
          about my background and skills.
        </p>
        <div className="flex items-center m-auto justify-center gap-4 max-w-[400px]">
          <Link
            className="w-full p-2 flex items-center justify-center gap-2 bg-main mt-4  "
            type="download"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-textLight font-semibold">
              Check My Resume
            </span>
          </Link>

          <Link
            href="mailto: eslamahmed9861@gmail.com"
            className="w-full p-2 flex items-center justify-center gap-2 bg-black/20 mt-4 border-b-2 "
          >
            <span className="text-textLight font-semibold">Email Me</span>
          </Link>
        </div>
        <p className="mt-6 font-semibold">
          Let&apos;s start a conversation and explore how we can work together!
        </p>
      </div>
    </div>
  );
};

export default Contact;
