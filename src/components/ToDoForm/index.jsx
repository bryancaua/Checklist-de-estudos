import "./to.do.form.style.css";
import { SaveButton } from "../SaveButton";
import { TextInput } from "../TextInput";

export function ToDoForm({onSubmit}) {
  return (
    <form action={onSubmit} className="form-save-item">
      <TextInput placeholder="Digite o item que deseja adicionar" />
      <SaveButton>Salvar Item</SaveButton>
    </form>
  );
}
