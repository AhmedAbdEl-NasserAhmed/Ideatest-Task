"use client";

import DeleteWindow from "@/components/DeleteWindow/DeleteWindow";
import Menus from "@/components/Menus/Menus";
import Modal from "@/components/Modal/Modal";
import { useDeleteTaskMutation } from "@/lib/features/api/tasksApi";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { HiEye, HiMiniPencilSquare, HiTrash } from "react-icons/hi2";

function TaskMenuOptions({ task }) {
  const { push } = useRouter();

  const user = useAppSelector((state) => state.user.user);

  const [deleteTask, response] = useDeleteTaskMutation();

  const onDeleteTask = () => {
    deleteTask(task._id)
      .unwrap()
      .then(() => {
        toast.success("Task is deleted");
      })
      .catch((err) => {
        toast.error(err.data.message);
      });
  };

  return (
    <Modal>
      <Menus.Menu>
        <Menus.Toggle id={task["_id"]} />

        <Menus.List id={task["_id"]}>
          <Menus.Button
            onClick={() =>
              push(
                `/${
                  user.role === "leader" ? "employer" : "employee"
                }/alltasks/${task._id}`
              )
            }
            icon={<HiEye />}
          >
            View
          </Menus.Button>

          <Menus.Button
            onClick={() =>
              push(
                `/${
                  user.role === "leader" ? "employer" : "employee"
                }/edittask/${task._id}`
              )
            }
            icon={<HiMiniPencilSquare />}
          >
            Edit
          </Menus.Button>

          {user?.role === "leader" && (
            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
            </Modal.Open>
          )}
        </Menus.List>

        <Modal.Window name="delete">
          <DeleteWindow
            disabled={response.isLoading}
            message="Are you sure that you want to delete this Task ?"
            onClick={onDeleteTask}
          />
        </Modal.Window>
      </Menus.Menu>
    </Modal>
  );
}

export default TaskMenuOptions;
