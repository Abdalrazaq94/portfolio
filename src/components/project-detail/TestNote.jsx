export default function TestNote({ show }) {
  if (show === false) return null;
  return (
    <div className="rounded-xl p-5 mb-8 max-w-2xl" style={{ backgroundColor: "#88B78B" }}>
      <p className="text-base font-medium text-white">
        If you're looking to test this app, I'm happy to provide API access
        or a setup guide to help you get started as a new user.
      </p>
    </div>
  );
}