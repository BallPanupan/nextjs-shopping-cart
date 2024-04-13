import { useEffect, useState } from 'react';
import { useStateContext } from '@/components/StateContext';
export default function About() {
	const { sharedState, setSharedState } = useStateContext();	

  const [session, setSession] = useState<string>();

  useEffect(() => {
    // setSession(sharedState.message);
  }, [sharedState]);

  return (
    <div>
      <h1>About Page</h1>
      {/* Select: {session} */}
    </div>
  );
}
