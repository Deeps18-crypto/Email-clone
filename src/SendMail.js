import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sentMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="text"
          placeholder="To"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">required</p>}
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {errors.subject && <p className="sendMail__error">required</p>}

        <input
          name="message"
          type="text"
          placeholder="Message..."
          className="sendMail__message"
          ref={register({ required: true })}
        />
        {errors.message && <p className="sendMail__error">required</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            type="submit"
            color="primary"
            variant="contained"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
