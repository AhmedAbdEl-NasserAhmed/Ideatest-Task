"use client";

import Menus from "@/components/Menus/Menus";
import Modal from "@/components/Modal/Modal";
import { useRouter } from "next/navigation";
import { HiEye, HiMiniPencilSquare, HiTrash } from "react-icons/hi2";

function TaskMenuOptions({ task }) {
  const { push } = useRouter();

  return (
    <Modal>
      <Menus.Menu>
        <Menus.Toggle id={task["_id"]} />

        <Menus.List id={task["_id"]}>
          <Menus.Button
            onClick={() => push(`/employer/alltasks/${task._id}`)}
            icon={<HiEye />}
          >
            View
          </Menus.Button>

          <Menus.Button icon={<HiMiniPencilSquare />}>Edit</Menus.Button>

          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
          </Modal.Open>
        </Menus.List>

        {/* <Modal.Window name="delete"></Modal.Window> */}
      </Menus.Menu>
    </Modal>
  );
}

export default TaskMenuOptions;
