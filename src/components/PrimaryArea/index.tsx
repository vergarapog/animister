import React from "react";
import Animation from "./Animation";

const PrimaryArea = () => {
  return (
    <main className={`h-full px-4 py-2`}>
      <section className={`flex space-x-4`}>
        <Animation />
        <Animation />
        <Animation />
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default PrimaryArea;
