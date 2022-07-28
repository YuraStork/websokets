import { Link } from "react-router-dom"
import { getAllRooms } from "../../api/rooms/getRooms"
import { Container } from "../../components/container"
import { useRequest } from "../../hooks/useRequest.hook"
import { CreateRoomComponent } from "./createRoom"
import { EnterInRoomComponent } from "./enterInRoom"
import { HomePageSection, HomePageWrapper } from "./styles"
import { TrainComponent } from "./train"

export const HomePage = () => {
  const { data, isLoading, error } = useRequest(getAllRooms);
  if (isLoading) return <div>loading...</div>

  return <HomePageSection>
    <Container>
      <HomePageWrapper>
        <CreateRoomComponent />
        <EnterInRoomComponent />
        <TrainComponent />
        {data && (data as []).map((e:any)=><div key={e._id}>{e.roomName}</div>)}
      </HomePageWrapper>
    </Container>
  </HomePageSection>
}