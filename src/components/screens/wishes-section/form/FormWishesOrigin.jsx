import { useState } from "react";
import axios from "axios";
import styles from "./FormWishes.module.css";

const API_URL = "https://daf3a6a6494c298f.mokky.dev/wishes";

const FormWishes = ({ texts, onWishAdded }) => {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [wish, setWish] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const attendanceOptions = [
    { value: "true", label: texts.attendance_yes },
    { value: "false", label: texts.attendance_no },
    { value: "maybe", label: texts.attendance_maybe },
  ];

  const selectedAttendance = attendanceOptions.find(
    (option) => option.value === attendance,
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    const formData = {
      nameAuthor: name.trim(),
      textsWish: wish.trim(),
      attend: attendance,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post(API_URL, formData);

      if (onWishAdded) {
        await onWishAdded(response.data);
      }

      alert(texts.wish_thanks);

      setName("");
      setAttendance("");
      setWish("");
      setIsOpen(false);
    } catch (err) {
      console.error("Ошибка отправки пожелания:", err);

      setError(
        "Не удалось отправить пожелание. Проверь подключение к интернету и попробуй ещё раз.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.fields}>
        {/* Имя */}
        <div className={styles.field}>
          <div className={styles.label}>
            <img src="/icons/user.svg" alt="" />
            <span>{texts.name_label}</span>
          </div>

          <input
            type="text"
            placeholder={texts.name_placeholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            required
            maxLength={75}
          />
        </div>

        {/* Присутствие */}
        <div className={`${styles.field} ${styles.attendanceField}`}>
          <div className={styles.label}>
            <img src="/icons/calendar-gray.svg" alt="" />
            <span>{texts.visit_label}</span>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            className={styles.selectButton}
          >
            <span
              className={attendance ? styles.selectedValue : styles.placeholder}
            >
              {selectedAttendance?.label || texts.visit_placeholder}
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`${styles.chevron} ${
                isOpen ? styles.chevronOpen : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          {isOpen && (
            <div className={styles.options}>
              {attendanceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    setAttendance(option.value);
                    setIsOpen(false);
                  }}
                  className={styles.option}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Пожелание */}
        <div className={styles.field}>
          <div className={styles.label}>
            <img src="/icons/chat-gray.svg" alt="" />
            <span>{texts.wish_label}</span>
          </div>

          <textarea
            placeholder={texts.wish_placeholder}
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className={styles.textarea}
            required
            maxLength={300}
          />

          <div className={styles.counter}>{wish.length}/300</div>
        </div>
      </div>

      {error && (
        <p role="alert" className={styles.error}>
          {error}
        </p>
      )}

      <div className={styles.footer}>
        <div className={styles.hint}>
          <img src="/icons/smile.svg" alt="" />
          <span>{texts.wish_leave}</span>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          <img src="/icons/send.svg" alt="" />
          <span>{isSubmitting ? "Отправка..." : texts.send_wishes}</span>
        </button>
      </div>
    </form>
  );
};

export default FormWishes;
