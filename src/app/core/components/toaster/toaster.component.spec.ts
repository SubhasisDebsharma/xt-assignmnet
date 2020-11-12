import { ToasterComponent } from "./toaster.component";
import { ToasterService } from "../../services/toaster/toaster.service";

describe("ToasterComponent", () => {
  let component: ToasterComponent;
  let service: ToasterService;

  beforeEach(() => {
    service = new ToasterService();
    service.createMessage("message1", "");
    service.createMessage("message2", "");
    component = new ToasterComponent(service);
  });

  afterEach(() => {
    service = null;
    component = null;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize the messages", () => {
    component.ngOnInit();
    expect(component.messages.length).toEqual(2);
  });

  it("should call dismissMessage function of ToasterService", () => {
    component.ngOnInit();
    component.dismiss(0);
    expect(component.messages.length).toEqual(1);
  });
});
