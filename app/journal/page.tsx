"use client"
import AuthenticatedComponent from "@/app/_components/authenticatedComponent/AuthenticatedComponent";
import ExpandableRow from '../_components/expandableRow/ExpandableRow'

const Journal = () => { 

  return (
    <AuthenticatedComponent>
      <section>
        <h1>Din journal</h1>
        <ExpandableRow
            date="2022-01-18"
            type="Telefonkontakt"
            from="Ögonmottagningen Uddevalla sjukhus"
            doctor="Dr. Smith"
            additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod erat vel justo fringilla cursus."
        />
        <ExpandableRow
            date="2022-01-20"
            type="Besöksanteckning"
            from="Ögonmottagningen Uddevalla sjukhus"
            doctor="Dr. Smith"
            additionalInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod erat vel justo fringilla cursus."
        />
      </section>
    </AuthenticatedComponent>
  );
};

export default Journal;
