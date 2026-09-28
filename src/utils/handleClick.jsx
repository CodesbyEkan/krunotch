export const handleClick = (e, sectionRefs, setPage) => {
  const pageClicked = e.currentTarget.dataset.page;
  setPage(pageClicked);
  scrollToSection(sectionRefs[pageClicked]);
  //   console.log(pageClicked);
};

const scrollToSection = (ref) => {
  if (!ref?.current) return;

  const yOffset = 0;
  const y =
    ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
};
