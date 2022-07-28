import { useState } from "react"
import { Link } from "react-router-dom"
import { getAllRooms } from "../../api/rooms/getRooms"
import { Container } from "../../components/container"
import { Loader } from "../../components/loader"
import { useRequest } from "../../hooks/useRequest.hook"
import { CreateRoomComponent } from "./createRoom"
import { EnterInRoomComponent } from "./enterInRoom"
import { HomePageSection, HomePageWrapper } from "./styles"
import { TrainComponent } from "./train"

export const HomePage = () => {
  const [loading, setIsLoading] = useState(false);
  const { data, isLoading } = useRequest(getAllRooms);
  
  if (isLoading || loading) return <Loader position="absolute" />

  return <HomePageSection>
    <Container>
      <HomePageWrapper>
        <CreateRoomComponent isLoading={loading} setIsLoading={setIsLoading} />
        <EnterInRoomComponent isLoading={loading} setIsLoading={setIsLoading} />
        <TrainComponent />
        {data && (data as []).map((e: any) => <div key={e._id}>{e.roomName}</div>)}
      </HomePageWrapper>
    </Container>
  </HomePageSection>
}