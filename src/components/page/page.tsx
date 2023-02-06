import Header from "../header/header";
import { gentlemans } from "../../mocks/mock";
import { Card } from "./../card/card";

function Page() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <ul className="gentlemen">
          <Card gentleman={gentlemans[0]} />
          <Card gentleman={gentlemans[1]} />
          <Card gentleman={gentlemans[2]} />
        </ul>
      </main>
    </div>
  );
}
export default Page;
