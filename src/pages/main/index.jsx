import React, { useState, useEffect, useContext } from "react";
import "./styles.css";
import Nav from "../../components/main/nav";
import Search from "../../components/main/search";
import Repositories from "../../components/main/repositories";
import {
  createRepository,
  getRepositories,
  deleteRepository,
  createSession,
  api,
} from "../../services/api";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

const MainPage = () => {
  const { user, logout } = useContext(AuthContext);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = "") => {
    try {
      const response = await getRepositories(user?.id, query);
      setRepositories(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoadingError(true);
    }
  };
  useEffect(() => {
    (async () => await loadData())();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const handleSearch = (query) => {
    loadData(query);
  };

  const handleDeleteRepo = async (repository) => {
    await deleteRepository(userId, repository._id);
    await loadData();
  };

  const handleCreateRepo = async (url) => {
    try {
      await createRepository(userId, url);
      await loadData();
    } catch (err) {
      console.log(err);
      setLoadingError(true);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        Erro ao carregar os dados de repositório.
        <Link to="/login">Voltar</Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando..</div>;
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDeleteRepo={handleDeleteRepo}
        onCreateRepo={handleCreateRepo}
      />
    </div>
  );
};

export default MainPage;
