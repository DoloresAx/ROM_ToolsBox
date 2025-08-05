

// // export default Header;

// import React from 'react';
// import ThemeToggle from './ThemeToggle';
// import { Container } from 'react-bootstrap';

// const Header = ({ theme, toggleTheme }) => (
//   <header className="py-3 border-bottom bg-light">
//     <Container fluid>
//       {/* Responsive row: title centered, toggle beside it on small screens, top-right on larger screens */}
//       <div className="d-flex justify-content-center align-items-center position-relative flex-wrap">
//         <h2 className="mb-0 text-center px-2">ROM Toolbox Store</h2>

//         {/* Small screens: show inline with title */}
//         <div className="ms-2 d-inline-block d-md-none">
//           <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//         </div>

//         {/* Medium and up: top-right corner */}
//         <div className="d-none d-md-block position-absolute top-0 end-0 m-3">
//           <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
//         </div>
//       </div>
//     </Container>
//   </header>
// );

// export default Header;


import React from 'react';
import ThemeToggle from './ThemeToggle';
import { Container } from 'react-bootstrap';

const Header = ({ theme, toggleTheme }) => {
  // Define styles for light and dark mode headers
  const headerStyle = {
    backgroundColor: theme === 'light' ? '#e3f2fd' : '#282c34', // light blue-ish for light mode, dark gray for dark
    borderBottom: theme === 'light' ? '1px solid #90caf9' : '1px solid #444',
    color: theme === 'light' ? '#0d47a1' : '#ffffff', // dark blue text for light mode, white text for dark
  };

  return (
    <header className="py-3 border-bottom" style={headerStyle}>
      <Container fluid>
        <div className="d-flex justify-content-center align-items-center position-relative flex-wrap">
          <h2 className="mb-0 text-center px-2" style={{ color: headerStyle.color }}>
            ROM Toolbox Store
          </h2>

          <div className="ms-2 d-inline-block d-md-none">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>

          <div className="d-none d-md-block position-absolute top-0 end-0 m-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
