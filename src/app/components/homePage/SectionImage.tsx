interface Props {
  sectionIndex: number;
}

function SectionImage({ sectionIndex }: Props) {
  return (
    <div>
      <div className={`section section${sectionIndex} sectionHover`}></div>
    </div>
  );
}

export default SectionImage;
