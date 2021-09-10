import * as React from 'react';
// MUI
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {styled} from '@mui/material/styles';
//
import theme from '../theme';
import Project from './Project';

const ProjectItemText = styled(ListItemText)({
  color: theme.palette.secondary.main,
  fontSize: '6vw',
  ':hover': {
    color: theme.palette.primary.main,
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
      <List>
        <ListItemButton onClick={handleClick}>
          {!open ? (
            <ProjectItemText disableTypography>{header}</ProjectItemText>
          ) : (
            <ProjectItemText disableTypography sx={{fontStyle: 'italic'}}>
              {header}
            </ProjectItemText>
          )}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List disablePadding sx={{paddingLeft: theme.spacing(4)}}>
            {projects.map(project => (
              <ListItemButton href={project.link}>
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
