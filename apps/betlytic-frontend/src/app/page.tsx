import EventBarUI from "@/components/application-ui/events-ui/event-bar";
import EventShowcaseUI from "@/components/application-ui/events-ui/event-showcase";

export default function Home() {
  return (
<>
      <div className="pt-20">
        <EventBarUI />
        <div className="md:px-6 pt-4 xl:px-72">
          <EventShowcaseUI />
        </div>
      </div>
    </>
  );
}
