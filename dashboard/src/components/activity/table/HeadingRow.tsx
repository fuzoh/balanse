import { type Component } from "solid-js";

export const HeadingRow: Component = () => {
  return (
    <tr>
      <th>Billet</th>
      <th class="hidden sm:table-cell">Client</th>
      <th>Détails</th>
    </tr>
  )
}