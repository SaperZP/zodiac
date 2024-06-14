import {useRouteError, isRouteErrorResponse, Link} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, page is not found</p>
          <p>
            <i>{`${error.statusText} ${error.status}`}</i>
          </p>

          <Link to={'/'}> Go back</Link>
        </div>
    );
  }

  return <p>{'Unknown Error'}</p>;
};

export default ErrorPage;
