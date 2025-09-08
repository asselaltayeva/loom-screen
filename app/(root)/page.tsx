import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import React from "react";

const Page = () => {
  return (
    <main className="wrapper page">
      <Header title="All Videos" subHeader="Public Library" />
      <VideoCard
        id="1"
        title="Snapchat Message"
        thumbnail="/assets/samples/thumbnail (1).png"
        createdAt={new Date("2025-08-23T06:25:54.423Z")}
        userImg="/assets/images/jason.png"
        username="Jason Bourne"
        views={1200}
        visibility="public"
        duration={120}
      />

      <VideoCard
        id="2"
        title="React Crash Course"
        thumbnail="/assets/samples/thumbnail (2).png"
        createdAt={new Date("2025-08-20T11:45:32.123Z")}
        userImg="/assets/images/sarah.png"
        username="Sarah Lee"
        views={5400}
        visibility="public"
        duration={780}
      />

      <VideoCard
        id="3"
        title="Cooking Pasta in 10 Min"
        thumbnail="/assets/samples/thumbnail (3).png"
        createdAt={new Date("2025-08-18T14:10:00.000Z")}
        userImg="/assets/images/michael.png"
        username="Michael Chen"
        views={2300}
        visibility="private"
        duration={600}
      />

      <VideoCard
        id="4"
        title="Morning Vlog in Seoul"
        thumbnail="/assets/samples/thumbnail (4).png"
        createdAt={new Date("2025-08-15T07:20:11.000Z")}
        userImg="/assets/images/jessica.png"
        username="Jessica Park"
        views={3100}
        visibility="public"
        duration={480}
      />

      <VideoCard
        id="5"
        title="Guitar Tutorial: Easy Chords"
        thumbnail="/assets/samples/thumbnail (5).png"
        createdAt={new Date("2025-08-10T19:55:27.000Z")}
        userImg="/assets/images/alex.png"
        username="Daniel Kim"
        views={8700}
        visibility="private"
        duration={900}
      />

      <VideoCard
        id="6"
        title="Top 10 Startup Pitches"
        thumbnail="/assets/samples/thumbnail (6).png"
        createdAt={new Date("2025-08-05T16:40:00.000Z")}
        userImg="/assets/images/lisa.png"
        username="Lisa Wong"
        views={15200}
        visibility="public"
        duration={1080}
      />

      <VideoCard
        id="7"
        title="Exploring Tokyo Streets"
        thumbnail="/assets/samples/thumbnail (7).png"
        createdAt={new Date("2025-08-01T08:30:44.000Z")}
        userImg="/assets/images/david.png"
        username="Ryan Smith"
        views={4900}
        visibility="public"
        duration={720}
      />

      <VideoCard
        id="8"
        title="AI Tools You Must Try"
        thumbnail="/assets/samples/thumbnail (8).png"
        createdAt={new Date("2025-07-28T21:12:19.000Z")}
        userImg="/assets/images/emily.png"
        username="Emily Johnson"
        views={10200}
        visibility="public"
        duration={660}
      />
    </main>
  );
};

export default Page;
