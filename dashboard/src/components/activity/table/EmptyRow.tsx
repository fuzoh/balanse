import { type Component } from "solid-js";

export const EmptyRow: Component = () => {
  return (
    <tr>
      <td class="relative py-5 pr-6">
        <div class="flex gap-x-6">
          <div class="flex-auto">
            <div class="flex items-start gap-x-3">
              <div class="text-sm font-medium leading-6 text-gray-900">
                Aucunnes nouvelles données depuis l'ouverure de la page
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};
