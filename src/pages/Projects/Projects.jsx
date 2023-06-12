import React, { useState, useEffect } from 'react'
import { projects } from "../../stubs/index.js";
import ProjectCard from './components/ProjectCard.jsx';
import { useFetching } from '../../hook/useFetching.jsx';
import ProjectsGet from '../../API/ProjectsGet.jsx';
import { useProjects } from '../../hook/useProjects.jsx';
import MyPaginate from '../../components/Pagination/MyPaginate.jsx';
import AppFilter from '../../components/AppFilter/AppFilter.jsx';
import ProjectList from '../../components/ProjectList.jsx';
import { getPagesCount } from '../../stubs/pages.js';

const Projects = () => {
  const [proj, setProjects] = useState([...projects]);

  const [totalPages, setTotalPages] = useState(2);
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(0);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const sortedAndSearchedProjects = useProjects(projects, filter.sort, filter.query);

  const [fetchProjects, isListLoading, projectError] = useFetching(async () => {
    const response = await ProjectsGet.getAll(limit, page);
    console.log(response);
    setProjects(response.data);
    const totalCount = 2
    //response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page);
  }

  const removeGame = async (prod) => {
    try {
      const response = await axios.delete(`http://localhost:8080/games/${prod.id}`)
      console.log(response?.data);
      console.log(JSON.stringify(response));
      setGames(games.filter(p => p.id !== prod.id))
    } catch (err) {
      if (!err?.response) {
        console.log(err.response);
      }
    }
  }

  useEffect(() => {
    fetchProjects();
  }, [page]);

  return (
    <div>
      <AppFilter
        filter={filter}
        setFilter={setFilter}
        fetchProjects={fetchProjects} />
      {
        projectError &&
        <h1 style={{ textAlign: 'center' }}>Произошла ошибка при загрузке!</h1>
      }
      {
        isListLoading
          ? <h1 style={{ textAlign: 'center' }}>Подождите, список загружается!</h1>
          : <ProjectList remove={removeGame} projects={sortedAndSearchedProjects} title={"Все проекты"} key={sortedAndSearchedProjects.id} />
      }
      <MyPaginate
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </div>
  )
}

export default Projects