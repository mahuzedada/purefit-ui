import {useContext, useState} from 'react';
import {plan} from "../ai/api";
import {QuestionContext} from "../context";
import isValidEmail from "../isValidEmail";

interface Props {
  setShowEmailForm: any;
}

const Email = ({ setShowEmailForm }: Props) => {
  const { answers } = useContext(QuestionContext);
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async () => {
    if (!isValidEmail(email)) {
      return;
    }
    setIsSending(true);
    try {
      await plan({
        email,
        user_info: answers,
        diet_rules: {
          no_artificial_sugar: true,
          limited_salt: true,
          intermittent_fasting: "{dependent_on_user}",
          reduced_portion: "{dependent_on_user}",
          reduced_times_eating: "{dependent_on_user}",
        },
      });
      setSent(true);
    } catch (error) {
      console.error("Error fetching the data", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="text-white">
      <div style={{background: 'linear-gradient(45deg, blue, purple, red)'  }} className="max-w-sm mx-auto rounded-xl shadow-2xl space-y-4">
        <div>

          { sent ? <div className="p-6">Your request has been received. Please check your email in 2 min.</div>
            : <div className="p-6">
              <div>
                <h2 className="text-2xl font-bold">Get Detailed Results!</h2>
                <p className="text-sm mt-2 text-gray-100">
                    Enter your email to receive an in-depth meal plan.
                </p>
              </div>
              <div>
                <p className="text-xs mt-2 text-gray-200">
                    Our detailed report will provide you with various meal ideas and a comprehensive plan tailored just for you.
                </p>
                <p className="text-xs mt-2 text-gray-200">
                    We'll send it directly to your inbox in a convenient PDF format.
                </p>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 p-2 w-full bg-transparent rounded-md border border-gray-400 focus:border-white focus:ring-0 focus:outline-none"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button
                  onClick={handleSubmit}
                  className={`mt-4 w-full px-3 py-2 rounded-md text-white ${isSending ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-600'}`}
                  disabled={isSending}
                >
                  {isSending ? 'Sending...' : 'Send!'}
                </button>
              </div>
            </div>
          }
        </div>
        <div className="w-full h-12 text-sm shadow-2xl flex justify-end items-center p-6">
          <button onClick={() => setShowEmailForm(false)}>
                Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Email;
