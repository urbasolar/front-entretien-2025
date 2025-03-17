import { useMatches } from 'react-router-dom';

export const Breadcrumbs = () => {
  const matches = useMatches() as {
    handle: { crumb?: (arg: { [key: string]: string }) => JSX.Element };
    data: string;
    params: { [key: string]: string };
  }[];

  const crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => match.handle?.crumb)
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => {
      if (match.handle.crumb) return match.handle.crumb(match?.params);
    });
  return (
    <div>
      <ol className="flex">
        {crumbs.map((crumb, index) => {
          if (!crumb) return;
          const elements = [
            <li
              key={index}
              className={`text-sm font-semibold ${
                crumb?.props?.to === window.location.pathname
                  ? 'dark:text-white text-neutral-black'
                  : 'dark:text-white-200 text-neutral-black'
              }`}
            >
              {crumb}
            </li>,
          ];

          if (index < crumbs.length - 1) {
            elements.push(
              <li
                key={index + 'separator'}
                className="mx-2 text-sm dark:text-white-200 text-neutral-black"
              >
                /
              </li>
            );
          }

          return elements;
        })}
      </ol>
    </div>
  );
};
