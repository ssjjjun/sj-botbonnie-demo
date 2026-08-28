// Phase 1: static prototype — no interactive backend logic yet.
// Nav items are intentionally inert (no destination pages built in this clone).
document.querySelectorAll('.gnb a[aria-disabled="true"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    e.preventDefault();
  });
});

// BotBonnie WebChat SDK will be added here in Phase 2, after frontend approval.
