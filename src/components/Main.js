import Hello from "./Hello";
import './Main.css';

const Main = () =>
(
    <div className="body-container">
        <Hello name="Alfin" jurusan="Tehnik Informatika" />
        <Hello name="Nur" jurusan="Tehnik Informatika" />
        <Hello name="Rahman" jurusan="Sistem Informatika" />
    </div>
);

export default Main;