import { Text } from "@chakra-ui/react";
import { ThreadDetailCard } from "../features/thread/components/ThreadDetailCard";
import { useThreads } from "../features/thread/hooks/useThreads";
import { useEffect } from "react";

export const ThreadDetail = () => {
  const { getThread, thread } = useThreads();

  useEffect(() => {
    getThread();
  }, []);

  if (!thread) {
    return <div>
      <Text>Loading...</Text>
    </div>;
  }

  return (
    <>
      <ThreadDetailCard
        id={thread.id}
        user={thread.user}
        created_at={thread.created_at}
        content={thread.content}
        image={thread.image}
        likes={thread.likes}
        replies={thread.replies}
        profile={thread.profile}
      />
    </>
  );
};
