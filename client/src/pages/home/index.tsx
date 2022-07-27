import { Link } from "react-router-dom"
import { Container } from "../../components/container"
import { CreateRoomComponent } from "./createRoom"
import { EnterInRoomComponent } from "./enterInRoom"
import { HomePageSection, HomePageWrapper } from "./styles"
import { TrainComponent } from "./train"

export const HomePage = () => {
  return <HomePageSection>
    <Container>
      <HomePageWrapper>
        <CreateRoomComponent />
        <EnterInRoomComponent />
        <TrainComponent />
      </HomePageWrapper>
    </Container>
  </HomePageSection>
}