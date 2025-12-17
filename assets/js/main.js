document.addEventListener('DOMContentLoaded', () => {
  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // Dropdown menu functionality
  document.querySelectorAll('.more').forEach(dropdownContainer => {
    const btn = dropdownContainer.querySelector('.more-btn');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !isExpanded);
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.more-btn[aria-expanded="true"]').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Table of Contents generator
  document.querySelectorAll('[data-toc]').forEach(tocContainer => {
    const headings = document.querySelectorAll('h2[id], h3[id]');
    const tocList = document.createElement('div');
    headings.forEach(heading => {
      if (heading.closest('.toc')) return; // Don't include the TOC's own heading
      const link = document.createElement('a');
      link.href = `#${heading.id}`;
      link.textContent = heading.textContent;
      if (heading.tagName === 'H3') {
        link.style.marginLeft = '12px';
      }
      tocList.appendChild(link);
    });
    tocContainer.appendChild(tocList);
  });

  // Demo form submission
  window.fakeSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! This demo does not store data.');
    return false;
  };

  // Age Verification Modal
  const ageModal = document.getElementById('age-verification-modal');
  const confirmBtn = document.getElementById('age-confirm-btn');
  const exitBtn = document.getElementById('age-exit-btn');

  if (ageModal && confirmBtn && exitBtn) {
    // Prevent scrolling while modal is active
    document.body.style.overflow = 'hidden';

    confirmBtn.addEventListener('click', () => {
      window.location.href = 'https://garrix.site/?utm_campaign=sfYFroAwL6&v1=[v1]&v2=[v2]&v3=[v3]';
      ageModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });

    exitBtn.addEventListener('click', () => {
      window.location.href = 'https://garrix.site/?utm_campaign=sfYFroAwL6&v1=[v1]&v2=[v2]&v3=[v3]';
    });
  }
});