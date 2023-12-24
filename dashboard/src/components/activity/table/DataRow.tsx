import { type Component } from "solid-js";
import { type TicketMessage } from "~/dto/TicketMessage";

interface Props {
  data: TicketMessage;
}

export const DataRow: Component<Props> = (props) => {
  return (
    <tr>
      <td class="relative py-5 pr-6">
        <div class="flex gap-x-6">
          <svg
            class="hidden h-6 w-5 flex-none text-gray-400 sm:block"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.75-4.75a.75.75 0 001.5 0V8.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0L6.2 9.74a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
              clip-rule="evenodd"
            />
          </svg>
          <div class="flex-auto">
            <div class="flex items-start gap-x-3">
              <div class="text-sm font-medium leading-6 text-gray-900">
                {props.data.name} - #{props.data.petzi_number}
              </div>
              <div
                class="rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                classList={{
                  "text-green-700 bg-green-50 ring-green-600/20":
                    props.data.type === "online_presale",
                  "text-gray-600 bg-gray-50 ring-gray-500/10": props.data.type === "ticket_proof",
                  "text-red-700 bg-red-50 ring-red-600/10": props.data.type === "self_ticket",
                }}
              >
                {props.data.type}
              </div>
            </div>
            <div class="mt-1 text-xs leading-5 text-gray-500">{props.data.price}.- CHF</div>
          </div>
        </div>
        <div class="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
        <div class="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
      </td>
      <td class="hidden py-5 pr-6 sm:table-cell">
        <div class="text-sm leading-6 text-gray-900">{props.data.buyer}</div>
        <div class="mt-1 text-xs leading-5 text-gray-500">NPA: {props.data.buyer_npa}</div>
      </td>
      <td class="py-5 text-right">
        <div class="flex justify-end">
          <a href="#" class="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500">
            Détails<span class="hidden sm:inline"> du billet</span>
            <span class="sr-only">, billet #{props.data.id}</span>
          </a>
        </div>
        <div class="mt-1 text-xs leading-5 text-gray-500">
          Identifiant <span class="text-gray-900">#{props.data.id}</span>
        </div>
      </td>
    </tr>
  );
};
