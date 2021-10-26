import React from "react";
import { Button } from "@chakra-ui/react";
import { NavLink as Link, useLocation } from "react-router-dom";

function NavLink({ to, name, onClose, ...rest }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <Button
        as="a"
        variant={isActive ? "outline" : "ghost"}
        colorScheme={isActive ? "blue" : "gray"}
        size="sm"
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}

export default NavLink;
