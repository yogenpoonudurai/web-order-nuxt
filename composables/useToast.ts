import { useToast } from "vue-toast-notification";

export default function () {
  const $toast = useToast();

  return {
    $toast,
  };
}
