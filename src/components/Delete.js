import React, { useState } from "react";

function Delete(task) {
  const DeleteHandler = (task) => {
    const newTsks = tasks.filter((t) => t !== task);
    addTasks(newTsks);
  };
}

export default Delete;
