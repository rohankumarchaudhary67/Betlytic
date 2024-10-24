import EventBarUI from "@/components/application-ui/events-ui/event-bar";
import EventShowcaseUI from "@/components/application-ui/events-ui/event-showcase";

export default function Home() {
  return (
<>
      <div className="pt-20">
        <EventBarUI />
        <div className="md:px-16 pt-4">
          <EventShowcaseUI />
        </div>
      </div>
    </>
  );
}
