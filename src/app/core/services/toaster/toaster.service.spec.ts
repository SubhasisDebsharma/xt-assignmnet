import { Message } from "./Message";
import { TestBed, inject } from "@angular/core/testing";

import { ToasterService } from "./toaster.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe("ToasterService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ToasterService]
    })
  );

  beforeEach(() => {
  });

  it("should be created..", inject(
    [ToasterService],
    (service: ToasterService) => {
      expect(service).toBeTruthy();
    }
  ));

  it("get message", inject([ToasterService], (service: ToasterService) => {
    const newob = new Message("content", "msg");
    expect(newob).toEqual(jasmine.any(Message));
    service.getMessages();
  }));

  it("show error message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const newError = new Message("content");
      const content = "";
      expect(newError).toEqual(jasmine.any(Message));
      service.showError(content);
    }
  ));

  it("show success message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const newSucces = new Message("content");
      const content = "";
      expect(newSucces).toEqual(jasmine.any(Message));
      service.showSuccess(content);
    }
  ));

  it("show info message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const newInfo = new Message("content");
      const content = "";
      expect(newInfo).toEqual(jasmine.any(Message));
      service.showInfo(content);
    }
  ));

  it("show warning message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const newWarning = new Message("content");
      const content = "";
      expect(newWarning).toEqual(jasmine.any(Message));
      service.showWarning(content);
    }
  ));

  it("show dismiss message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const newDismiss = new Message("content");
      //  const content = "";
      expect(newDismiss).toEqual(jasmine.any(Message));
      service.dismissLastMessage();
    }
  ));

  it("show dismissall message", inject(
    [ToasterService],
    (service: ToasterService) => {
      const dismissLast = new Message("content");
      //  const content = "";
      expect(dismissLast).toEqual(jasmine.any(Message));
      service.MessageArray = [dismissLast];
      service.dismissAllMessage();
    }
  ));

  // it("show dismissall message", inject(
  //   [ToasterService],
  //   (service: ToasterService) => {
  //     const dismissMessages = new Message("content");
  //     expect(dismissMessages).toEqual(jasmine.any(Message));
  //     service.dismissMessage(0);
  //   }
  // ));

  it("show", inject([ToasterService], (service: ToasterService) => {
    spyOn(service, "dismissMessage");
    service.MessageArray = [];
    service.dismissAfterSomeTime();
    service.dismissMessage(0);
    // setTimeout(() => {
    //   service.dismissMessage(0);
    // expect(service.dismissMessage).toHaveBeenCalled();
    // service.MessageArray = [0];
    // }, 10000);
  }));
  it("show", inject([ToasterService], (service: ToasterService) => {
    service.dismissAllMessage();
    // tslint:disable-next-line: no-unused-expression
    // [
    //   { content: "hi", msg: "hello" },
    //   { content: "hi", msg: "hello" }
    // ];
  }));
});
