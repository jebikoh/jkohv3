import * as React from 'react';
// MUI
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {styled} from '@mui/material/styles';
// Icons
import ChevronDown from '@mui/icons-material/KeyboardArrowDown';
import ChevronLeft from '@mui/icons-material/KeyboardArrowLeft';
//
import theme from '../theme';
import Project from './Project';

// const ProjectItemText = styled(ListItemText)({
//   color: theme.palette.secondary.main,
//   fontSize: '6vw',
//   ':hover': {
//     color: theme.palette.primary.main,
//   },
//   [theme.breakpoints.up('sm')]: {
//     fontSize: `${6 * theme.scale.sm}vw`,
//   },
// });

const ReactiveChevronDown = styled(ChevronDown)({
  fontSize: '8vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: `${8 * theme.scale.sm}vw`,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: `${8 * theme.scale.md}vw`,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: `${8 * theme.scale.lg}vw`,
  },
});

const ReactiveChevronLeft = styled(ChevronLeft)({
  fontSize: '8vw',
  [theme.breakpoints.up('sm')]: {
    fontSize: `${8 * theme.scale.sm}vw`,
  },
  [theme.breakpoints.up('md')]: {
    fontSize: `${8 * theme.scale.md}vw`,
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: `${8 * theme.scale.lg}vw`,
  },
});

const ProjectSubItemText = styled(ListItemText)({
  color: theme.palette.accent.main,
  ':hover': {
    color: theme.palette.secondary.main,
  },
});

interface ProjectListProps {
  header: string;
  projects: Project[];
}

export default function ProjectList({header, projects}: ProjectListProps) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List sx={{padding: '0vh', paddingTop: '1vh', paddingBottom: '1vh'}}>
        <ListItemButton sx={{textAlign: 'left'}} onClick={handleClick}>
          {!open ? (
            <>
              <ListItemText disableTypography>{header}</ListItemText>
              <ReactiveChevronDown sx={{fontSize: '8vw'}} />
            </>
          ) : (
            <>
              <ListItemText disableTypography sx={{fontStyle: 'italic'}}>
                {header}
              </ListItemText>
              <ReactiveChevronLeft sx={{fontSize: '8vw'}} />
            </>
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding sx={{paddingLeft: theme.spacing(4)}}>
            {projects.map(project => (
              <ListItemButton
                id={project.name}
                component="a"
                href={project.link}
              >
                <ProjectSubItemText disableTypography>
                  {project.name}
                </ProjectSubItemText>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </>
  );
}
