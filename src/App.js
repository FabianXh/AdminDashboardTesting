import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import SingleUser from "./pages/singleUser/SingleUser";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Posts from "./pages/posts/Posts";
import TodoList from "./pages/todolist/TodoList";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<SingleUser />} />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SingleUser title="Add New Product" />} />
            </Route>
            <Route path="posts">
              <Route index element={<Posts />} />
            </Route>
            <Route path="todolist">
              <Route index element={<TodoList />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
