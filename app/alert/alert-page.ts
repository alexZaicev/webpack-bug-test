import { fromObject } from "tns-core-modules/data/observable";
import { EventData, Page } from "tns-core-modules/ui/page";

export function onShownModally(e: any) {
  const page: Page = e.object as Page;
  page.bindingContext = fromObject({});
}

export function onOkTap(e: any) {
  e.object.closeModal();
}